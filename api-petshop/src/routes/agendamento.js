import express from 'express';
import mongoose from 'mongoose';
import Agendamento from '../models/agendamento.js';

const calcularValor = (especie, servico) => {
    switch (especie) {
        case 'Cão':
            switch (servico) {
                case 'Banho e Tosa':
                    return 100;
                case 'Banho':
                    return 50;
                case 'Tosa':
                    return 60;
                default:
                    return null;
            }
        case 'Gato':
            switch (servico) {
                case 'Banho e Tosa':
                    return 110;
                case 'Banho':
                    return 60;
                case 'Tosa':
                    return 70;
                default:
                    return null;
            }
        case 'Outro':
            switch (servico) {
                case 'Banho e Tosa':
                    return 80;
                case 'Banho':
                    return 40;
                case 'Tosa':
                    return 50;
                default:
                    return null;
            }
        default:
            return null;
    }
};

const cadastrarAgendamento = async (req, res) => {
    try {
        const valor = calcularValor(req.body.especie, req.body.servico);
        const novoAgendamento = await Agendamento.create({ ...req.body, valor });
        return res.status(201).json({
            message: 'Agendamento cadastrado com sucesso',
            agendamento: novoAgendamento,
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Erro ao cadastrar agendamento',
            error: error.message,
        });
    }
};

const listarAgendamentos = async (req, res) => {
    try {
        const agendamentos = await Agendamento.find();
        return res.status(200).json({
            message: 'Listando agendamentos:',
            agendamentos: agendamentos,
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Erro ao listar agendamentos',
            error: error.message,
        });
    }
};

const listarAgendamentosPorPet = async (req, res) => {
    try {
        const { nome } = req.query;
        const regex = new RegExp(`${nome}`, 'i');
        console.log(nome);
        if (nome) {
            const agendamentos = await Agendamento.find({ nomePet: regex });
            return res.status(200).json({
                message: 'Listando agendamentos por nome do pet:',
                agendamentos: agendamentos,
            });
        } else {
            const agendamentos = await Agendamento.find();
            return res.status(200).json({
                message: 'Listando agendamentos:',
                agendamentos: agendamentos,
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: 'Erro ao listar agendamentos',
            error: error.message,
        });
    }
};

const atualizarAgendamento = async (req, res) => {
    try {
        const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(req.params.id, req.body, {
            returnDocument: 'after',
            runValidators: true,
        });
        if (!agendamentoAtualizado) {
            return res.status(404).json({
                message: 'Agendamento não encontrado',
                agendamento: agendamentoAtualizado,
            });
        }
        return res.status(200).json({
            message: 'Agendamento atualizado',
            agendamento: agendamentoAtualizado,
        });
    } catch (error) {
        return res.status(404).json({
            message: 'Erro ao atualizar agendamento',
            error: error.message,
        });
    }
};

const removerAgendamento = async (req, res) => {
    try {
        const agendamento = await Agendamento.findByIdAndDelete(req.params.id);
        if (!agendamento) {
            return res.status(404).json({
                message: 'Agendamento não encontrado',
                agendamento: agendamento,
            });
        }
        return res.status(200).json({
            message: 'Agendamento removido com sucesso',
            agendamento: agendamento,
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Erro ao remover agendamento',
            error: error.message,
        });
    }
};

export { cadastrarAgendamento, listarAgendamentos, listarAgendamentosPorPet, atualizarAgendamento, removerAgendamento };
