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

        stage("Deploy") {

            steps{
                echo "Creating Openshift Resources"
                oc login $LOGIN_URL --namespace=$OCP_PROJECT
                oc new-app imag-url --labels="app=app-name" || true
                oc set resources deploymentConfig app-name --limits=memory=2524Mi,cpu=250m --requests=memory=1900Mi,cpu=200m || true
                oc create route edge app-name --insecure-policy="Allow" --service service-name --port 2113 || true
                oc process -f deployment.yaml -p TAG=$CI_COMMIT_SHORT_SHA -p ENV=bos-dev | oc apply -f -
                oc patch dc/deployment-name --type=json -p="[{\"op\":\"replace\", \"path\":\"/spec/template/spec/serviceAccountName\", \"value\":\"config-reader\"}]" | grep -q "not patched" || true
                }
        }
}
