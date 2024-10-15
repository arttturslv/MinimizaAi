export default function PoliticaPrivacidade({togglePoliticaVisibility}) {
    return (
        <div className="w-full h-screen bg-jet/70 flex justify-center items-center absolute">
            <div className="w-2/3 overflow-y-auto max-h-[66%] overflow-hidden p-2 py-6 bg-eerieBlack text-seaSalt rounded-3xl">
                <div className="flex items-center px-4">
                    <h3 className="text-2xl flex-grow font-semibold text-center">Politica de privacidade</h3>
                    <button onClick={togglePoliticaVisibility} type="button" >
                                <div className="p-2 bg-jet rounded-xl hover:bg-jet/60 cursor-pointer">
                                    <img width={32} height={32} className=" rotate-180" src="https://i.imgur.com/50Y8SLg.png" alt="icone de enviar" />
                                </div>
                    </button>
                </div>

                <div className=" p-6 ">
                    <div className="py-1">
                        <h4 className="font-medium">Coleta de Informações</h4>
                        <p>
                        O Minimiza URL não coleta cookies ou qualquer informação pessoal diretamente dos usuários. No entanto, a ferramenta de hospedagem utilizada, o Vercel, pode coletar algumas informações de uso. Recomendamos que você leia a política de privacidade do Vercel para entender como seus dados podem ser utilizados. Para mais informações, visite: <a className="text-celticBlue underline" href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Política de Privacidade do Vercel</a>.
                        </p>
                    </div>

                    <div className="py-1">
                        <h4 className="font-medium">Armazenamento de Dados</h4>
                        <p>
                        Os dados gerados a partir do uso do nosso serviço podem ser armazenados temporariamente. Se você desejar que seus dados sejam excluídos, entre em contato diretamente com o desenvolvedor através do LinkedIn. Faremos o possível para atender ao seu pedido o mais rápido possível.
                        </p>
                    </div>

                    <div className="py-1">
                        <h4 className="font-medium">Atualizações da Política de Privacidade</h4>
                        <p>
                        Como o Minimiza URL está em desenvolvimento e se destina a fins educacionais, novas informações e funcionalidades podem ser adicionadas ao Site sem a obrigação de informar os usuários. A Política de Privacidade pode ser atualizada a qualquer momento, e a data da última modificação será armazenada e exibida nesta seção.
                        </p>
                    </div>

                    <div className="py-1">
                        <h4 className="font-medium">Contato</h4>
                        <p>
                        Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre como seus dados estão sendo utilizados, entre em contato comigo via LinkedIn.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}