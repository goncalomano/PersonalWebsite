import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
function ContactForm() {
  return (
    <div class="ContactForm ontop" id="ContactMe">
            <InstagramEmbed url="https://www.instagram.com/p/CggurtFMLWg/?utm_source=ig_web_copy_link" className="InstagramEmbed" />
            <div className="Socials">
                <h2 class="ContactMe">Get in touch with me</h2>
                <div class="SocialMedia">
                    <div className="social">
                        <i class="bi bi-instagram socialicon"></i>
                        <div className="socialTitle">@goncalo.mano</div>
                    </div>
                    <div className="social">
                        <i class="bi bi-discord socialicon"></i>
                        <div className="socialTitle">lemanuh#0999</div>
                    </div>
                    <div className="social">
                        <i class="bi bi-twitter socialicon"></i>
                        <div className="socialTitle">@GonaloMano3</div>
                    </div>
                    <div className="social">
                        <i class="bi bi-github socialicon"></i>
                        <div className="socialTitle">goncalomano</div>
                    </div>
                    <div className="social">
                        <i class="bi bi-envelope socialicon"></i>
                        <div className="socialTitle">business@goncalomano.com</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ContactForm