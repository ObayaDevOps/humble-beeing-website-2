import React, { Component } from "react";
import { Dropdown, DropdownItem } from 'semantic-ui-react'

//Instagram, LinkedIn, Email, Twitter, Facebook, Youtube, Whats app, Mobile

const contactOptions = [
    {
        key: 'Instagram',
        text: 'Instagram',
        value: 'Instagram',
        link: 'www',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
      }

]



const ContactDropdownContainer = () => (
    <Dropdown 
        fluid
        selection
        options={contactOptions}> 
        
    {/* {contactOptions.map((option) => (
        <DropdownItem key={option.value} {...option} />
    ))}     */}
    </Dropdown>
)

export default ContactDropdownContainer