import './Rodape.css'
const Rodape = () => {

    return (
        <footer className='rodape'>
            <div className='divs'>
                <div >
                    <img className='icones' src='image/fb.png' alt='Facebook'/>
                    <img className='icones'src='image/ig.png' alt='Instagram'/>
                    <img className='icones'src='image/tw.png' alt='Twitter'/>
                </div>
                <div>
                    <img className='logo' src='image/logo.png' alt='Organo'/>
                </div>
                <div>
                    <h5 className='dev'>Desenvolvido por CEB</h5>
                </div>
        </div>
        </footer>
    )
}

export default Rodape