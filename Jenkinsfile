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
		docker.withServer('vqnpap121.hcqis.org:2375'){
			appImage.run('-p 9999:80 --rm --name eqrs-design-system')
		}
		
		
	}

}