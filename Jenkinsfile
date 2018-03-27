node {
	def appImage
	stage "Checkout code"
	checkout scm
	
	stage "Build angular application"
	dir("${env.HUDSON_HOME}/workspace/${env.JOB_NAME}/eqrsdesignsystem"){
		sh 'npm install'
		sh 'ng build'
	}
	
	stage "Build and push docker image"
	dir("${env.HUDSON_HOME}/workspace/${env.JOB_NAME}"){
		appImage = docker.build('eqrs-design-system:latest', '-f ./Docker/Dockerfile ./')
	}
	docker.withRegistry('http://vqnpap119-mgt.hcqis.org:5000'){
		appImage.push()
	}
	
	stage "Run docker container"
	docker.withServer('vqnpap121.hcqis.org:2375'){
		appImage.run('-p 9999:80 --rm --name eqrs-design-system')
	}
	
}