import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Twitter from '../static/twitter-icon.svg';
import Github from '../static/github-icon.svg';
import Linkedin from '../static/linkedin-icon.svg';
import Personal from '../static/personal-icon.svg';

const Icon = ({ name }) => {
	const className = cx('w-8 m-1');

	const icons = {
		twitter: <Twitter className={className} />,
		github: <Github className={className} />,
		linkedin: <Linkedin className={className} />,
		personal: <Personal className={className} />,
	};

	return <>{icons[name]}</>;
};

Icon.propTypes = {
	name: PropTypes.string,
};

export default Icon;
