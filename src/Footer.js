import './assets/css/main.css'

export default function Footer() {

    const title = ['Find A Store', 'Become A Member', 'Sign Up For Email', 'Send Us Feedback']
    const help = ['Order Status', 'Delivery', 'Returns', 'Payment Options', 'Contact Us']
    const about_shop = ['News', 'Careers', 'Investors', 'Sustainability']
    return(
        <div id = "footer">
            <div className="container">
                <div className = "container-title">
                    <ul className = "container-title-ul ">
                       {title.map(title => (
                           <li className = "container-title-ul-li footer-title">{title}</li>
                       ))}
                    </ul>
                    <ul className = "container-title-ul">
                        <li className = "container-title-ul-li footer-title">Get Help</li>
                        {help.map(help => (
                            <li className = "container-title-ul-li footer-des">{help}</li>
                        ))}
                    </ul>
                    <ul className = "container-title-ul">
                        <li className = "container-title-ul-li footer-title">About Shop</li>
                        {about_shop.map(aboutShop => (
                            <li className = "container-title-ul-li footer-des">{aboutShop}</li>
                        ))}
                    </ul>
                </div>
                <div className = "container-icon">
                      <ul className = "container-title-ul">
                        <li className = "container-title-ul-li footer-des">Twitter</li>
                        <li className = "container-title-ul-li footer-des">Facebook</li>
                        <li className = "container-title-ul-li footer-des">Youtube</li>
                        <li className = "container-title-ul-li footer-des">Instagram</li>
                     </ul>
                </div>
            </div>
        </div>
    )
}