import React from 'react'

const BankCard = (props) => {

  const { focused, locale, name, placeholders } = this.props;
  const { number, expiry } = this;

  return (
    <div key="Cards" className="rccs">
      <div
        className={[
          'rccs__card',
          `rccs__card--${this.issuer}`]}
      >
        <div className="rccs__card--front">
          <div className="rccs__card__background" />
          <div className="rccs__issuer" />
          <div>

          </div>
          <div
            className={[
              'rccs__number',
              number.replace(/ /g, '').length > 16 ? 'rccs__number--large' : '',
              focused === 'number' ? 'rccs--focused' : '',
              number.substr(0, 1) !== '•' ? 'rccs--filled' : '',
            ].join(' ').trim()}
          >
            {number}
          </div>
          <div
            className={[
              'rccs__name',
              focused === 'name' ? 'rccs--focused' : '',
              name ? 'rccs--filled' : '',
            ].join(' ').trim()}
          >
            {name || placeholders.name}
          </div>
          <div
            className={[
              'rccs__expiry',
              focused === 'expiry' ? 'rccs--focused' : '',
              expiry.substr(0, 1) !== '•' ? 'rccs--filled' : '',
            ].join(' ').trim()}
          >
            <div className="rccs__expiry__valid">{locale.valid}</div>
            <div className="rccs__expiry__value">{expiry}</div>
          </div>
          <div className="rccs__chip" />
        </div>
        <div className="rccs__card--back">
          <div className="rccs__card__background" />
          <div className="rccs__stripe" />
          <div className="rccs__signature" />
          <div>
          </div>
          <div className="rccs__issuer" />
        </div>
      </div>
    </div>
  );
}