import React from 'react';
import Role from './Role';

const Header = ({ roleList, filterRole, toggleFilterRole }) => (
	<div id="home" className="p-4 pt-0 md:p-8 md:ml-8">
		<div className="container mx-auto flex md:py-6 grid sm:grid-cols-1 md:grid-cols-2 gap-4 items-center">
			<div className="md:border-r-2 justify-center" style={{ borderColor: '#5A78FF' }}>
				<div className="pl-4 pr-8">
					<h1 className="inline text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide leading-snug">
						Important Title
					</h1>
					<h2 className="text-xl font-bold">
						And then a subtitle
					</h2>
				</div>
			</div>
			<div className="pl-4 pb-8">
				<strong>Bold statement that starts this paragraph off.</strong> Lots of text about stuff. This script makes an API request to a small airtable project. 
			</div>
		</div>
	</div>
);

export default Header;
