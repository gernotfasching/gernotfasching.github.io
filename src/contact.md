---
layout: layout.njk
title: Contact
permalink: contact.html
---

<div style="max-width: fit-content; margin-left: auto; margin-right: auto;font-family: Roboto; border-radius: 5px; padding: 1px 30px; width: 75%;">
   <h2 style="font-size:30px">Contact Us</h2>
      <div>
         <label>Full Name</label>
         <div>
            <input style="margin-top: 5px; background-color: #fff; height:35px; width:235px;" type="text" name="first_name" placeholder="Enter your name and surname" required="required">
         </div>
      </div>
      <br>
      <div>
         <label>Email address</label>
         <div>
            <input style="margin-top: 5px;background-color: #fff; height:35px; width:235px;" type="email" name="email" placeholder="Enter your email address" required="required">
         </div>
      </div>
      <br>
      <div>
         <label>Your Message</label>
         <div>
            <textarea style="margin-top: 5px;background-color: #fff; height:50px; width:235px;" type="text" name="message" placeholder="Enter your message" required="required"></textarea>
         </div>
      </div>
      <input type="hidden" name="utf8" value="✓">
      <button style="font-size:14px; background-color:#6b7ddf; color:#fff; font-weight:bold; padding:10px 35px; margin: 5px 0 0 0;" type="submit">SUBMIT</button>
{% renderTemplate "liquid,md" %}
## Anime - by Gernot Fasching

* e-mail: gernot.fasching@bulme.at
* address: 8200 Graz
1. Read Informations
1. Contact after
    {% endrenderTemplate %}
</div>
