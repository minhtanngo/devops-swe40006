pipeline {
    agent any
    tools {nodejs "nodejs"}
    
    stages {
        // stage("Install") {
        //     steps {
        //         git branch: 'main', url: 'https://github.com/minhtanngo/devops-swe40006.git'
        //         sh "npm install"
        //     }
        // }
        
        stage("Build") {

            steps {
                sh "npm run build"
            }
        }
        stage("Test") {

            steps {
                sh "npm test a"
            }
        }
    }
}

