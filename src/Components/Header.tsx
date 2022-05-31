import yextImage from '../Images/yext-logo.png'

const Header = () => {
    return (
        <div className="flex justify-center items-center bg-rose-400 h-64 text-4xl">
            <img src={yextImage} alt="Yext logo"/>
            <h1 className="mx-8">Answer the questions below to discover the right library for you!</h1>
        </div>
    )
}

export default Header