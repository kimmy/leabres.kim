import React from "react";
import axiosEs6 from "axios-es6";

import formStyles from "../assets/css/formStyles";
import styles from "../assets/css/styles";

import { color } from "../assets/css/lib/variables";
import { cx, css } from "emotion";

import Colored from "../components/Colored";
import Header from "../components/Header";
import Link from "gatsby-link";
import Flash from "../components/Flash"

class ContactForm extends React.Component {
  constructor() {
    super()
    this.state = {
      sending: false,
      sent: false,
      disabled: false,
      success: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.ga) {
      window.ga('send', 'event', 'Contact', 'Submit form')
    }
    this.setState({ sending: true, disabled: true })

    const form = e.target;
    const url = 'https://us-central1-kbleabres0913.cloudfunctions.net/sendEmail';
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    }

    axiosEs6({
      method: 'post',
      url: url,
      data
    }).then((response) => {
      console.log(response.data);
      this.setState({sending: false, sent: true, disabled: false})
      if (typeof window !== 'undefined' && window.ga) {
        window.ga('send', 'event', 'Contact', 'Submit form successful')
      }
    }).catch((err) => {
      this.setState({success: false, sent: true})
      console.log(err)
    })
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
                  <div>
                    <Flash success={this.state.success} />
                    <div><Link to="/">Home</Link></div>
                  </div>
                ) : (
                  <form method="post" onSubmit={this.handleSubmit}>
                    <div className={css(formStyles.grid)}>
                      <div className={css(formStyles.name)}>
                        <input type="text" name="name" id="name" placeholder="name" required/>
                      </div>
                      <div className={css(formStyles.email)}>
                        <input type="email" name="email" id="email" placeholder="email" required/>
                      </div>
                      <div className={css(formStyles.subject)}>
                        <input type="text" name="subject" id="subject" placeholder="subject" />
                      </div>
                      <div className={css(formStyles.message)}>
                        <textarea name="message" id="message" placeholder="hi kim!" rows="4" required ></textarea>
                      </div>
                      { this.state.sending ? (<div className={css(formStyles.loader)}></div>) : ("") }
                      <div className={css(formStyles.submit)}>
                        <input type="submit" className="submit" value="send" disabled={this.state.disabled} />
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
