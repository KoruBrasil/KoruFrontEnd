import Header from "@/components/header/Header";
import { useState } from "react"
export default function Contato() {

        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [tel, setTel] = useState('')
        const [submitted, setSubmitted] = useState(false)
    
        
    
        const handleSubmit = (e) => {
            e.preventDefault()
    
            
            let data = {
                name,
                email,
                tel
            }
            if (!name.trim() || !email.trim() || !tel.trim()) {
                window.alert("Preencha todos os campos")
                return;
            }
            if (name.length < 3) {
                window.alert('O nome deve conter 3 letras ou mais')
                return;
            }
            if (tel.length < 10) {
                window.alert("O número de telefone deve conter o DDD + 8 digitos para telefone fixo ou DDD + 9 digitos para celular")
                return;
            }
    
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                if (res.status === 200) { 
                    setSubmitted(true)
                    setName('')
                    setEmail('')
                    setTel('')
                    alert('Contato Salvo!')
                }
            })
        }
    
    return (
        <div>
            <Header />

            <div className="bg-bgcontato bg-cover p-20 flex flex-col justify-center items-center">
                <h2 className="text-white text-4xl font-bold pb-5">
                    Contato
                </h2>

                <div className="w-screen flex justify-center pt-5 drop-shadow-dark2">
                    <div className="w-[305px] h-[400px] flex justify-center items-center md:right-32 border-2 border-branco rounded text-sm">
                        <form
                            className="flex flex-col justify-center items-center p-8 w-72 h-96 bg-tema-site rounded-large bg-white bg-opacity-10  text-white rounded"
                        >
                            <h2 className="text-2xl font-bold">
                                Ligamos para você!
                            </h2>
                            <p className="text-sm">
                                Preencha o formulario abaixo,
                            </p>
                            <p className="text-sm">
                                e receba nosso contato
                            </p>
                            <label className="mt-2 text-sm p-1">
                                Nome:
                            </label>
                            <input type="text" name="name" value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                className="rounded-3xl w-48 p-1 px-2 text-sm text-yellow1 bg-purple-100 border border-yellow1"
                            />
                            <label className="text-sm p-1">
                                E-mail:
                            </label>
                            <input type="text" name="email" value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="rounded-3xl w-48 p-1 px-2 text-sm text-yellow1 bg-purple-100  border border-yellow1"
                            />
                            <label className="text-sm p-1">
                                Telefone
                            </label>
                            <input
                                type='text' name='tel'
                                value={tel}
                                onChange={(e) => { setTel(e.target.value) }}
                                className="rounded-3xl w-48 p-1 px-2 text-sm text-yellow bg-purple-100  border border-yellow1"
                            />
                            < input type='submit' onClick={(e) => { handleSubmit(e) }}
                                value="Enviar"
                                className="p-1 mt-6 rounded-3xl px-4 bg-branco text-tema-site text-sm w-48 cursor-pointer text-white bg-yellow1 hover:text-yellow1 hover:bg-white  font-bold border border-yellow1 hover:border hover:border-yellow1 transform active:scale-75 transition-transform ease-in-out duration-300"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}