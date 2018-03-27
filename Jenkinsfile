node {
	stage "Checkout code"
	checkout scm
	
	stage "Build angular application"
	dir("${env.HUDSON_HOME}/workspace/${env.JOB_NAME}/eqrsdesignsystem"){
		sh 'npm install'
		sh 'ng build'
	}
	
	stage "Build docker image"
	dir("${env.HUDSON_HOME}/workspace/${env.JOB_NAME}/Docker"){
		docker.build(eqrs-design-system:latest)
		
	}
}