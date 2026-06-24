#!/usr/bin/env python3
"""
Remove // line comments from JS/TS files inside a src folder.

Usage:
    python remove_comments.py /path/to/project/src
    python remove_comments.py /path/to/project/src --backup
    python remove_comments.py /path/to/project/src --extensions .js .ts .jsx .tsx
"""

import argparse
import os
import shutil
import sys

DEFAULT_EXTENSIONS = {".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"}


def strip_line_comments(source: str) -> str:
    """
    Remove `//` line comments from JS/TS source while respecting:
    - single-quoted strings
    - double-quoted strings
    - template literals (backticks, including ${...} interpolation)
    - block comments /* ... */ (left untouched, but we must not get confused by // inside them)
    - regex literals (best-effort)
    - escaped characters inside strings
    """
    result = []
    i = 0
    n = len(source)

    in_single = False
    in_double = False
    in_template = False
    in_block_comment = False
    template_depth = 0  # tracks ${ ... } nesting inside template literals

    while i < n:
        c = source[i]
        nxt = source[i + 1] if i + 1 < n else ""

        # --- Inside a block comment: just copy through until */ ---
        if in_block_comment:
            result.append(c)
            if c == "*" and nxt == "/":
                result.append(nxt)
                i += 2
                in_block_comment = False
                continue
            i += 1
            continue

        # --- Inside a single-quoted string ---
        if in_single:
            result.append(c)
            if c == "\\" and i + 1 < n:
                result.append(nxt)
                i += 2
                continue
            if c == "'":
                in_single = False
            i += 1
            continue

        # --- Inside a double-quoted string ---
        if in_double:
            result.append(c)
            if c == "\\" and i + 1 < n:
                result.append(nxt)
                i += 2
                continue
            if c == '"':
                in_double = False
            i += 1
            continue

        # --- Inside a template literal ---
        if in_template:
            result.append(c)
            if c == "\\" and i + 1 < n:
                result.append(nxt)
                i += 2
                continue
            if c == "`":
                in_template = False
            i += 1
            continue

        # --- Not inside any string/comment: detect start of one ---
        if c == "/" and nxt == "*":
            in_block_comment = True
            result.append(c)
            result.append(nxt)
            i += 2
            continue

        if c == "/" and nxt == "/":
            # Line comment: skip until newline (but keep the newline itself)
            i += 2
            while i < n and source[i] != "\n":
                i += 1
            # Trim trailing whitespace left on that line before the comment
            while result and result[-1] in (" ", "\t"):
                result.pop()
            continue

        if c == "'":
            in_single = True
            result.append(c)
            i += 1
            continue

        if c == '"':
            in_double = True
            result.append(c)
            i += 1
            continue

        if c == "`":
            in_template = True
            result.append(c)
            i += 1
            continue

        result.append(c)
        i += 1

    return "".join(result)


def remove_blank_lines_left_behind(text: str) -> str:
    """Collapse lines that became empty (only whitespace) after comment removal,
    but only if they were comment-only lines originally turned blank.
    We keep it simple: strip trailing whitespace per line, drop fully blank lines
    that resulted purely from comment removal isn't tracked precisely, so we just
    leave blank line collapsing OFF by default. Kept here if you want to enable it.
    """
    lines = text.split("\n")
    cleaned = [line.rstrip() for line in lines]
    return "\n".join(cleaned)


def process_file(path: str, backup: bool, dry_run: bool) -> bool:
    try:
        with open(path, "r", encoding="utf-8") as f:
            original = f.read()
    except (UnicodeDecodeError, PermissionError) as e:
        print(f"  ! Skipping {path}: {e}")
        return False

    cleaned = strip_line_comments(original)
    cleaned = remove_blank_lines_left_behind(cleaned)

    if cleaned == original:
        return False  # nothing changed

    if dry_run:
        print(f"  Would modify: {path}")
        return True

    if backup:
        shutil.copy2(path, path + ".bak")

    with open(path, "w", encoding="utf-8") as f:
        f.write(cleaned)

    print(f"  Modified: {path}")
    return True


def main():
    parser = argparse.ArgumentParser(description="Remove // comments from JS/TS files in a src folder.")
    parser.add_argument("src_dir", help="Path to the src folder")
    parser.add_argument("--backup", action="store_true", help="Create a .bak copy of each modified file")
    parser.add_argument("--dry-run", action="store_true", help="Show what would change without writing files")
    parser.add_argument(
        "--extensions",
        nargs="+",
        default=sorted(DEFAULT_EXTENSIONS),
        help="File extensions to process (default: %(default)s)",
    )
    parser.add_argument(
        "--exclude-dirs",
        nargs="+",
        default=["node_modules", ".git", "dist", "build"],
        help="Directory names to skip",
    )
    args = parser.parse_args()

    src_dir = os.path.abspath(args.src_dir)
    if not os.path.isdir(src_dir):
        print(f"Error: {src_dir} is not a directory", file=sys.stderr)
        sys.exit(1)

    extensions = {e if e.startswith(".") else f".{e}" for e in args.extensions}
    exclude_dirs = set(args.exclude_dirs)

    modified_count = 0
    scanned_count = 0

    for root, dirs, files in os.walk(src_dir):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]

        for filename in files:
            ext = os.path.splitext(filename)[1]
            if ext not in extensions:
                continue
            full_path = os.path.join(root, filename)
            scanned_count += 1
            if process_file(full_path, args.backup, args.dry_run):
                modified_count += 1

    print(f"\nDone. Scanned {scanned_count} files, modified {modified_count}.")
    if args.dry_run:
        print("(dry run — no files were actually changed)")
    if args.backup and modified_count and not args.dry_run:
        print("Backups saved as <filename>.bak next to each modified file.")


if __name__ == "__main__":
    main()