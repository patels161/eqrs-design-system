node {
	def appImage
	stage "Checkout code"
	checkout scm
	
	stage "Build angular application"
	dir("${env.HUDSON_HOME}/workspace/${env.JOB_NAME}/eqrsdesignsystem"){
		sh 'npm install'
		sh 'ng build'
	}
	
	stage "Build, push, and run docker image"
	dir("${env.HUDSON_HOME}/workspace/${env.JOB_NAME}"){

		appImage = docker.build('vqnpap119-mgt.hcqis.org:5000/eqrs-design-system:latest', '-f ./Docker/Dockerfile ./')
		appImage.push()
		docker.withServer('vqndwb17.hcqis.org:2375'){
			try{
			    sh 'docker stop eqrs-design-system'
				sh 'docker rm eqrs-design-system'
			}
			catch(Exception e){
				echo 'Container not found. Proceeding to deploy new image.'
			}
			
			appImage.run('-p 9999:80 --rm --name eqrs-design-system')
		}
		
		
	}

}