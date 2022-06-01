import yextImage from '../Images/yextLogo.png'

const Header = () => {
    return (
        <div className="flex justify-center items-center bg-rose-400 h-64 text-4xl">
            <img src={yextImage} alt="Yext logo" className="w-32"/>
            <h1 className="mx-8">Answer the questions below to discover the right library for you!</h1>
        </div>
    )
}

export default Header