import './App.css'
import { cv } from "./data/Cv.js";

export default function App() {
	return (
		// Div container that has the entire page
		<div className="page">
			{/* The className = "xxx" means that it will use the CSS for that "xxx" defined in the CSS file*/}
			<header className="header">
				<h1>{cv.basics.name}</h1>
				{/* Paragraphs for the title and the location, muted for making opacity 0.75 in css*/}
				<p className="muted">{cv.basics.title}</p>
				<p className="muted">{cv.basics.location}</p>

				<div className="links">
					{/* Goes through the list of links in the cv file and makes them anchor tags, aka hyperlinks. Href is where it takes you, target means that it opens a new page, rel prevents the new site from getting some referrer info
						So each link gets id of key, href for location, target for new tab and rel for opening it safely
					*/}
					{cv.basics.links.map((link) => (
						<a key={link.label} href={link.url} target="_blank" rel="noreferrer">
							{link.label}
						</a>
					))}
				</div>
			</header>
			{/* Main section that includes majority of the page*/}
			<main className="main">
				{/* Section for the about part, goes through the list and makes each line a paragraph with an index and line for content*/}
				<section>
					<h2>About</h2>
					{cv.about.map((line, idx) => (
						<p key={idx}>{line}</p>
					))}
				</section>

				{/* Section for skills, goes through list and makes a list on the page, ul is for an unordered list. Chip is a style defined in CSS which makes them "bubbles"*/}
				<section>
					<h2>Skills</h2>
					<ul className="chips">
						{cv.skills.map((skill) => (
							<li key={skill} className="chip">
								{skill}
							</li>
						))}
					</ul>
				</section>
				{/* Section for the projects, goes through projects list and gives each a name, description, technology stack and url for it if one exists*/}
				<section>
					<h2>Projects</h2>
					<div className="cards">
						{cv.projects.map((p) => (
							<article key={p.name} className="card">
								<h3>{p.name}</h3>
								<p className="muted">{p.description}</p>
								<p className="muted">
									<strong>Tech:</strong> {p.tech.join(", ")}
								</p>
								{p.url ? (
									<a href={p.url} target="_blank" rel="noreferrer">
										View
									</a>
								) : null}
							</article>
						))}
					</div>
				</section>
				{/* Contact section with email address link*/}
				<section>
					<h2>Contact</h2>
					<p>
						Email: <a href={`mailto:${cv.basics.email}`}>{cv.basics.email}</a>
					</p>
				</section>
			</main>
		</div>
	);
}