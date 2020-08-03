import React from 'react'

import './styles.css'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/1220881375060013057/tetNgFaH_400x400.jpg" alt="Fontenele" />
                <div>
                    <strong>
                        Felipe Fon
                            </strong>
                    <span>
                        Matemática
                            </span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de matemática avançada.
                    <br /> <br />
                    Apaixonado por calcular coisas em laboratórios e por mudar a vida das pessoas através de resolução de listas de exercicíos. Mais de 200.000 pessoas já passaram por uma de minhas listas.
                    </p>

            <footer>
                <p>Preço/hora
                            <strong>R$ 2,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;