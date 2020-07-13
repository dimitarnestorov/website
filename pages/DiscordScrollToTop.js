import Depiction from '../components/Depiction'

export default function DiscordScrollToTop() {
	return (
		<Depiction
			name="DiscordScrollToTop"
			github="https://github.com/dimitarnestorov/DiscordScrollToTop"
			subtitle="Scroll to the top in Discord by tapping the status bar"
		>
			<style jsx>{`
				img {
					max-width: 100%;
					width: 320px;
					display: block;
					margin: 0 auto;
					border-radius: 5px;
				}

				ul {
					margin-top: -10px;
					margin-bottom: 0;
				}
			`}</style>

			<img src="/assets/DiscordScrollToTop/showcase.gif" alt="DiscordScrollToTop showcase" />

			<p>No options to configure.</p>

			<p>Known issues:</p>
			<ul>
				<li>It only works in places containing messages like chat, pinned messages, and mentions</li>
			</ul>
		</Depiction>
	)
}
