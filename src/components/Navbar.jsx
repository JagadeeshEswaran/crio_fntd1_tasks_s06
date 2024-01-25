import { IoSearchOutline } from "react-icons/io5";
import "./navbar.modules.css";

function Navbar() {
	return (
		<div>
			<h2>Hi, this is Navbar!!</h2>

			<section className="navbar-section">
				<article className="logo">Logo</article>

				<article className="searchbar-container">
					<form action="#" className="searchbar-form">
						<input
							type="text"
							placeholder="Search a song of your choice"
							className="search-input"
						/>
						<IoSearchOutline className="search-icon" />
					</form>
				</article>

				<article>
					<button>Give Feedback</button>
				</article>
			</section>
		</div>
	);
}

export default Navbar;
