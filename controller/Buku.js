const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class Buku {

    static create = async (req, res) => {
        try {
            const data = req.body
            data.tahun_terbit = parseInt(data.tahun_terbit)
            data.id_pengarang = parseInt(data.id_pengarang)
            await prisma.buku.create({ data: data })
            res.json({ status: true, message: 'Berhasil menambah pengarang' })
        } catch (error) {
            console.log(error)
            res.json({ status: false, message: 'Terjadi kesalahan saat input pengarang' })
        }
    }

    static find = async (req, res) => {
        try {
            const findData = await prisma.buku.findMany({})
            res.json({ status: true, message: "Berhasil memuat", data: findData })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat menampilkan data' })
        }
    }

    static findById = async (req, res) => {
        try {
            const idPengarang = Number(req.params.id)
            const findData = await prisma.buku.findMany({ where: { id_pengarang: idPengarang } })
            res.json({ status: true, message: "Berhasil memuat", data: findData })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat menampilkan data' })
        }
    }

    static update = async (req, res) => {
        try {
            const idPengarang = Number(req.params.id)
            const data = req.body
            data.tahun_terbit = parseInt(data.tahun_terbit)
            data.id_pengarang = parseInt(data.id_pengarang)
            await prisma.buku.update({ where: { id_pengarang: idPengarang }, data: data })
            res.json({ status: true, message: 'Berhasil menambah pengarang' })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat merubah data' })
        }
    }

    static delete = async (req, res) => {
        try {
            const idPengarang = Number(req.params.id)
            await prisma.buku.delete({ where: { id_pengarang: idPengarang } })
            res.json({ status: true, message: 'Berhasil mengahapus pengarang' })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat menghapus data' })
        }
    }

}

module.exports = Buku