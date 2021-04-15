import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer class="bg-primary text-white text-center text-lg-start">
            <div class="container p-4">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">About Us</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Contact Us</h5>
                        <SocialIcon className="m-1" network="facebook" bgColor="#fff" />
                        <SocialIcon className="m-1" network="linkedin" bgColor="#fff" />
                        <SocialIcon className="m-1" network="twitter" bgColor="#fff" />
                    </div>
                </div>
                <div className="row text-center">
                    <p><small>Copyright 2021</small></p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;