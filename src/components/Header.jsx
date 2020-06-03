import React from 'react';
import Role from './Role';

const Header = ({ roleList, filterRole, toggleFilterRole }) => (
	<div id="home" className="p-4 pt-0 md:p-8 md:ml-8">
		<div className="container mx-auto flex md:py-6 grid sm:grid-cols-1 md:grid-cols-2 gap-4 items-center">
			<div className="md:border-r-2 justify-center" style={{ borderColor: '#5A78FF' }}>
				<div className="pl-4 pr-8">
					<h1 className="inline text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide leading-snug">
						Glitch alumni
					</h1>
					<h2 className="text-xl font-bold">
						Each of these people would be the best hire <br /> your team can make!!!! Keith is just writing
						something here to see sumn
					</h2>
					<div className="my-2 mb-6">
						<div className="flex md:block lg:flex lg:items-center flex-row md:flex-col lg:flex-row">
							<span className="hidden text-sm font-bold lg:block">Jump to</span>
							{roleList.map((role) => (
								<Role
									key={role.id}
									data={role}
									toggleFilterRole={toggleFilterRole}
									filterRole={filterRole}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="pl-4 pb-8">
				<strong>Glitch alums have skills and talents that lead the entire industry.</strong> Every one of them
				has enabled teams to succeed while working remotely, with extensive experience from well before social
				distancing started. If you’re looking to hire smart, caring, thoughtful new members for your team,
				please reach out to them directly using their contact information below. If you have any questions or
				require a reference, we are eager to help, just email{' '}
				<a href="mailto:talent@glitch.com">talent@glitch.com</a>.
			</div>
		</div>
	</div>
);

export default Header;
