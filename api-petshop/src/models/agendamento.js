import mongoose from 'mongoose';

const agendamentoSchema = new mongoose.Schema(
    {
        nomePet: {
            type: String,
            required: true,
            trim: true,
        },
        especie: {
            type: String,
            enum: ['Cão', 'Gato', 'Outro'],
            required: true,
            trim: true,
        },
        nomeDono: {
            type: String,
            required: true,
            trim: true,
        },
        telefoneDono: {
            type: String,
            required: true,
            trim: true,
        },
        servico: {
            type: String,
            required: true,
            enum: ['Banho', 'Tosa', 'Banho e Tosa'],
            trim: true,
        },
        data: {
            type: Date,
            required: true,
            trim: true,
        },
        valor: {
            type: Number,
        },
        status: {
            type: String,
            enum: ['Agendado', 'Concluído', 'Cancelado'],
            default: 'Agendado',
        },
    },
    {
        timestamps: true,
    }
);

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);
export default Agendamento;
