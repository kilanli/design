import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.277215306534!2d35.529486276364366!3d38.7136641575236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b128d76fcf789%3A0x7f895b035dacee58!2sErciyes%20Teknopark%20A.%C5%9E.!5e1!3m2!1str!2str!4v1729856244372!5m2!1str!2str"
            width="100%"
            height="500"
            style={{border: 0,}}
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h2>Bizimle İletişime Geçin</h2>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  Ad Soyad
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  E-posta
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Konu
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Mesajınız
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Gönder</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Köylüden Halka</strong>
                  <p className="contact-street">
                    Yıldırım Beyazıt Mahallesi E.Ü. TGB İdare ve Kuluçka, Aşık
                    Veysel Blv. 28 3, 38010 Melikgazi
                  </p>
                  <a href="tel:Phone:(0352) 123 38 38">
                    Telefon:(0352) 123 38 38
                  </a>
                  <a href="mailto:Email:koyludenhalka@gmail.com">
                    E-posta: koyludenhalka@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Çalışma Saatleri</strong>
                  <p className="contact-date">
                    Pazartesi - Cuma : 08:00 - 19:00
                  </p>
                  <p>Haftasonları kapalıyız</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
