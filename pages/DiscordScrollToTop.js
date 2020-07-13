import Depiction from '../components/Depiction'

export default function DiscordScrollToTop() {
	return (
		<Depiction
			name="DiscordScrollToTop"
			github="https://github.com/dimitarnestorov/DiscordScrollToTop"
			subtitle="Scroll to the top in Discord by tapping the status bar"
		>
			<style jsx>{`
				ul {
					margin-top: -10px;
					margin-bottom: 0;
				}
			`}</style>

			<p>No options to configure.</p>

			<p>Known issues:</p>
			<ul>
				<li>It only works in places containing messages like chat, pinned messages, and mentions</li>
			</ul>
		</Depiction>
	)
}
