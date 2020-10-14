import React from 'react';
import IconCall from './assets/call.svg';
import IconEdit from './assets/edit.svg';
import IconLock from './assets/lock.svg';
import IconSearch from './assets/search.svg';
import IconSend from './assets/send.svg';
import './Icon.css';

const Icon = props => {
	let icon;
	const style = props.align === 'right' ? 'icon--right' : null;
	switch (props.name) {
		case 'call':
			icon = <img src={IconCall} className={style} />;
			break;
		case 'edit':
			icon = <img src={IconEdit} className={style} />;
			break;
		case 'lock':
			icon = <img src={IconLock} className={style} />;
			break;
		case 'search':
			icon = <img src={IconSearch} className={style} />;
			break;
		case 'send':
			icon = <img src={IconSend} className={style} />;
			break;
		default:
			icon = <span />;
			break;
	}
	return icon;
};

export default Icon;