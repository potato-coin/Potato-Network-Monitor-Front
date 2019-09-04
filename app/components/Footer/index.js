import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { FooterWrapper, FooterSpan, RegularLink, /* Lion, */ StyledLink } from './styles';

// Image
// import lion from '../../assets/images/lion.png';

@translate()
export default class Footer extends Component {
  render() {
    const { t, /* path, */ mapPath } = this.props;

    return (
      <FooterWrapper>
        <FooterSpan>
          {/* <Link to={path}>
            <Lion src={lion} alt="Lion" />
          </Link> */}
          {t('footer.createdBy')}{' '}
          <RegularLink href="https://potatocoin.com" target="__blank">
            {t('footer.potatoCoin')}
          </RegularLink>{' '}
          2019 (
          <RegularLink href="https://github.com/potatocoinpoc/Potato-Network-Monitor" target="__blank">
            {t('footer.gitHub')}
          </RegularLink>{' '}
          v2.0-d
          {process.env.VERSION_NUMBER})
        </FooterSpan>
        <div>
          <StyledLink to={mapPath}>{mapPath === '/map' ? t('footer.map') : t('footer.table')}</StyledLink>
        </div>
      </FooterWrapper>
    );
  }
}

Footer.propTypes = {
  t: PropTypes.func,
  // path: PropTypes.string,
  mapPath: PropTypes.string,
};
