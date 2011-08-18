set :application, "araso.de"

set :scm, :git
set :user, 'vu2030'
set :group, 'www-data'

set :repository, "git@github.com:burza/#{application}.git"

set :rails_root, "#{File.expand_path(File.dirname(__FILE__)+ '/..')}"

set :branch, 'master'

set :rails_env, :production

set :deploy_to, "/var/www/virtual/araso.de/htdocs"
set :keep_releases, 5
set :no_release, false
set :use_sudo, false

role :app, "#{application}"
role :web, "#{application}"
role :db, "#{application}", :primary => true

$:.unshift(File.expand_path('./lib', ENV['rvm_path']))
require "rvm/capistrano"
set :rvm_ruby_string, '1.9.2-p136@araso.de'
set :rvm_type, :system

desc "Link shared files"
task :link_shared_files do
  run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
  run "ln -nfs #{shared_path}/config/thin.yml #{release_path}/config/thin.yml"
  run "ln -nfs #{shared_path}/db/production.sqlite3 #{release_path}/db/production.sqlite3"
end

namespace :deploy do
  %w(start stop restart).each do |action| 
     desc "#{action} the Thin processes"  
     task action.to_sym do
       find_and_execute_task("thin:#{action}")
    end
  end
  
  desc "run 'bundle install' to install Bundler's packaged gems for the current deploy"
  task :bundle_install, :roles => :app do
    run "cd #{release_path} && bundle install"
  end
end

namespace :thin do  
  %w(start stop restart).each do |action| 
  desc "#{action} the app's Thin Cluster"  
    task action.to_sym, :roles => :app do  
      run "thin #{action} -c #{deploy_to}/current -C #{deploy_to}/current/config/thin.yml" 
    end
  end
end

after "deploy:update_code", :link_shared_files
#after "deploy:update_code", "deploy:bundle_install"