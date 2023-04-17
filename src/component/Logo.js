import PropTypes from 'prop-types'
const Logo=({logo,title})=>{
    return(
        <div className="flex items-center">
            <img src={logo} alt={title} className="mr-3 h-6" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                {title}
            </span>
        </div>
    )
}
Logo.propTypes={
    title:PropTypes.string,
    logo:PropTypes.string
}
Logo.defaultProps={
    title:'Corona App',
    logo:'https://mcare.fi/wp-content/uploads/2020/03/corona_logo.png'
}
export default  Logo