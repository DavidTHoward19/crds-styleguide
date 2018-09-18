source "https://rubygems.org"

gem "jekyll", "~> 3.7.3"
gem 'uglifier'

# To fix security vulnerability
gem 'sprockets', '~> 3.7.2'

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem 'jekyll-assets'
  # gem 'crds-styles', path: File.join(File.dirname(__FILE__), '../crds-styles')
  # gem 'crds-styles', git: 'https://github.com/crdschurch/crds-styles.git', branch: 'development'
  gem 'crds-styles', git: 'https://github.com/crdschurch/crds-styles.git', tag: 'v3.0.5'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
