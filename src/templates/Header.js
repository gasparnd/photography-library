const Header = () => {
	const view = `
		<div class="header-wraper">
			<nav class="menu">
				<div class="menu-item">
					<p>Home</p>
				</div>
				<div class="menu-item">
					<p>ToDay</p>
				</div>
				<div class="menu-item">
					<p>Following</p>
				</div>
			</nav>
			<div class="search">
				<div class="search-ico">
					<i class="icon-search"></i>
				</div>
				<input class="search-input" type="text" placeholder="search"></input>
				<button id="search-btn">Search</button>
			</div>
			<div class="header-right">
				<div class="header-ico">
					<i class="icon-bell"></i>
				</div>
				<div class="header-ico">
					<i class="icon-message"></i>
				</div>
				<a href="https://gasparnd.github.io/" target="_blank" class="profile">
					<img src="https://avatars3.githubusercontent.com/u/36377522?s=460&u=3b1f554c19b5dc2e21bf0aef269f44ee5bf87fdf&v=4" alt="Profile Image">
				</a>
				<div class="header-ico more-options">
					<i class="icon-chevron-down"></i>
				</div>
			</div>
		</div>
	`
	return view 
}

export default Header