# Dream Compute Example Project

This project exists as a test by HostingAdvice.com to show off the ease of using 
DreamCompute with Ansible.

## Infrastructure
To keep it simple we have a single deploy.yml that is pretty much self contained except
for needing an external role for HAProxy.

![Infrastructure](https://raw.githubusercontent.com/digital-brands/dreamcompute-ansible/master/readme/dashboard.png)

There are three instances that will be launched.  The first will be a load balancer 
running HAProxy. The second and third instances will be identical and running a simple 
NodeJS app.

**Please realize that this repo is for clarity and simplicity.**
There is no minification, a lot of hard-coded magic numbers, and other
terrible things to do in a production system.  This is a proof-of-concept only.

Server 1 - HAProxy
Server 2 - NodeJS App
Server 3 - NodeJS App

![home 1](https://raw.githubusercontent.com/digital-brands/dreamcompute-ansible/master/readme/home-1.png)

![home 2](https://raw.githubusercontent.com/digital-brands/dreamcompute-ansible/master/readme/home-2.png)

## Running and Deploying
To get this running the following steps would be used...these may not be exact.

1. Generate your _*-openrc.sh_ and _testing.pem_ files on the DreamCompute Dashboard.
2. Run _install_roles.sh_: This will grab the HAProxy role from Ansible-Galaxy
3. Make sure ansible is installed on whatever VPS/Server whatever you are running from (http://docs.ansible.com/ansible/intro_installation.html)
4. Run something like '. ./dhc2182418-openrc.sh && ansible-playbook deploy.yml' to deploy this code
5. ???
6. Profit


