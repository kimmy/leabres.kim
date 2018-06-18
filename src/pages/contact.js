import React from "react";
import axios from "axios";

import formStyles from "../assets/css/formStyles";
import styles from "../assets/css/styles";

import { color } from "../assets/css/lib/variables";
import { cx, css } from "emotion";

import Colored from "../components/Colored";
import Header from "../components/Header";

class ContactForm extends React.Component {
  constructor() {
    super()
    this.state = {
      sending: false,
      sent: false,
      invalidEmail: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({invalidEmail: false})
    // if (typeof window !== 'undefined' && window.ga) {
    //   window.ga('send', 'event', 'Contact', 'Submit form')
    // }
    const mailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (e.target.email.value.match(mailregex)) {
      this.setState({ sending: true })

      var form = e.target;
      const data = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
      }

      axios({
        method: 'post',
        url: 'https://us-central1-kbleabres0913.cloudfunctions.net/sendEmail',
        data
      }).then((response) => {
        debugger;
        console.log(response);
      }).catch((err, response, body) => {
        debugger;
      })
    } else {
      this.setState({invalidEmail: true})
    }
    // setTimeout(function () {
    //   this.setState({sent: true})
    // }.bind(this), 2000)
  }

  render() {
    return(
      <div>
        <Header />
        <div className={cx(css(styles.flexCenter), css(formStyles.page))}>
          <div className={css(formStyles.card)}>
            <div className={css(formStyles.heading)}>
              <Colored color={color.text}>✨contact me ✨</Colored>
            </div>
            <div className={css(formStyles.content)}>
              {this.state.sent ? (
                  <div className={css(formStyles.flash)}>
                    Message sent! Thank you for contacting me!
                  </div>
                ) : (
                  <form method="post" onSubmit={this.handleSubmit}>
                    <div className={css(formStyles.grid)}>
                      <div className={css(formStyles.name)}>
                        <input type="text" name="name" id="name" placeholder="name" />
                      </div>
                      <div className={css(formStyles.email)}>
                        <input type="email" name="email" id="email" placeholder="email" className={this.state.invalidEmail ? (css(formStyles.error)) : ("")}/>
                      </div>
                      <div className={css(formStyles.subject)}>
                        <input type="text" name="subject" id="subject" placeholder="subject" />
                      </div>
                      <div className={css(formStyles.message)}>
                        <textarea name="message" id="message" placeholder="hi kim!" rows="4"></textarea>
                      </div>
                      { this.state.sending ? (<div className={css(formStyles.loader)}></div>) : ("") }
                      <div className={css(formStyles.submit)}>
                        <input type="submit" className="submit" value="send" />
                      </div>
                    </div>
                  </form>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm
