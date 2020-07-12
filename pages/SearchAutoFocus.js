import Depiction from '../components/Depiction'

export default function SearchAutoFocus() {
	return (
		<Depiction
			name="SearchAutoFocus"
			github="https://github.com/dimitarnestorov/SearchAutoFocus"
			subtitle="Automatically focus the search bar"
		>
			<style jsx>{`
				.beforeAfter {
					max-width: 100%;
					padding-top: 244.6%;
					position: relative;
				}

				.beforeAfter::after {
					content: '';
					background-image: url('/assets/SearchAutoFocus/before-after.png');
					background-size: contain;
					background-repeat: no-repeat;
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
				}

				ul {
					margin-bottom: 0;
				}
			`}</style>

			<div className="beforeAfter" />

			<p>
				SearchAutoFocus aims to save you from that annoying tap near the top of the screen when visiting the
				search tab. Currently it only supports the stock UI, but support for custom implementations like Cydia
				and Spotify will be added in the future.
			</p>

			<p>
				Depends on libsparkapplist which is available on{' '}
				<a href="https://repo.dynastic.co/" target="_blank" rel="noopener noreferrer">
					https://repo.dynastic.co/
				</a>{' '}
				and{' '}
				<a href="https://sparkdev.me/" target="_blank" rel="noopener noreferrer">
					https://sparkdev.me/
				</a>
			</p>

			<p>
				By default it’s enabled for a bunch of stock apps and a couple of third party apps that seem to work
				fine. To prevent any janky user experience you have to enable it yourself for every app you want to use
				it with.
			</p>

			<p>Known issues:</p>
			<ul>
				<li>
					Doesn’t work with Cydia, Installer, Spotify, social media apps, and others, post app requests{' '}
					<a
						href="https://github.com/dimitarnestorov/SearchAutoFocus/issues/1"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
				</li>
				<li>Doesn’t work first time you visit the search tab for TV and Books (iOS 13)</li>
				<li>Janky experience with Files app</li>
				<li>Doesn’t work with iOS 11 stock apps</li>
			</ul>
		</Depiction>
	)
}
