//задание 1
// import 'dotenv/config'
// import express, {Request, Response} from 'express'
//
// const app = express()
//
// app.use(express.json())
//
// app.post('/books',
//     async (req: Request, res: Response) => {
//         const book = repository.createBook(req.body.title, req.body.year)
//         res.send({
//             id: +(new Date()),
//             title: req.body.title,
//             year: req.body.year,
//         })
//     })
// const repository = {
//     async createBook(title: string, year: number) {
//         const book = {
//             id: +(new Date()),
//             title: title,
//             year: year
//         }
//         books.push(book)
//         return book
//     }
// }
//
// app.get('/hello',
//     async (req: Request, res: Response) => {
//         res.send({value: 'OK, db is connected'})
//     })
//
// app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port: ${process.env.PORT}`)
// })
//
// // const repository = {
// //     async createBook(title: string, year: number) {
// //         const book = {
// //             id: +(new Date()),
// //             title: title,
// //             year: year
// //         }
// //         books.push(book)
// //         return book
// //     }
// // }
//
// let books = [
//     {id: 1, title: 'Algorithms', year: 2020},
//     {id: 2, title: 'SQL', year: 2021},
//     {id: 3, title: 'CSS', year: 2019},
//     {id: 4, title: 'JS', year: 2018},
//     {id: 5, title: 'Back-end - Путь Самурая', year: 2022},
// ]

/*
Книга создаётся, но возвращается почему-то пустой объект. Исправьте ошибку. В качестве ответа дайте
полную исправленную строку
*/

//задание 2
import 'dotenv/config'
import express, {Request, Response} from 'express'

const app = express()

app.use(express.json())

app.get('/books',
    async (req: Request<{},{},{},{term:string}>, res: Response) => {
        let books = repository.findBooks(req.query.term)
        res.send(books)
    })
//<{},{},{},{term:string}>

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port: ${process.env.PORT}`)
})

const repository = {
    async findBooks(term: string) {
        term = term.toLowerCase().toString()
        return books.filter(b => b.title.indexOf(term) > -1) //> -1
    }
}

let books = [
    {id: 1, title: 'Algorithms', year: 2020},
    {id: 2, title: 'SQL', year: 2021},
    {id: 3, title: 'CSS', year: 2019},
    {id: 4, title: 'JS', year: 2018},
    {id: 5, title: 'Back-end - Путь Самурая', year: 2022},
]

/*
Почему-то не работает поиск. Исправьте ошибку.
В качестве ответа дайте полную исправленную строку
*/

//задание 3
// import 'dotenv/config'
// import express, {Request, Response} from 'express'
//
// const app = express()
//
// app.use(express.json())
//
// app.put('/books/:id',
//     async (req: Request, res: Response) => {
//         const book = await repository.updateBook(+req.params.id, req.body.title, req.body.year)
//         if (book) {
//             res.send(book)
//         } else {
//             res.sendStatus(404)
//         }
//     })
//
// app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port: ${process.env.PORT}`)
// })
//
// const repository = {
//     updateBook(bookId: number, title: string, year: number) {
//         const promise = new Promise((res, rej) => {
//             const book = books.find(b => b.id === bookId)
//             if (book) {
//                 book.title = title
//                 book.year = year
//                 res(book)
//             } else {
//                 res(null)
//             }
//         })
//     }
// }
//
// let books = [
//     {id: 1, title: 'Algorithms', year: 2020},
//     {id: 2, title: 'SQL', year: 2021},
//     {id: 3, title: 'CSS', year: 2019},
//     {id: 4, title: 'JS', year: 2018},
//     {id: 5, title: 'Back-end - Путь Самурая', year: 2022},
// ]
//
// /*
// В программе ошибка (случайно удалили строчку кода), из-за чего при обновлении книги обновлённая версия этой книги не возвращается назад.
//
// Пофиксите проблему одной новой строкой кода.
// В качестве ответа дать эту строку целиком.
// */