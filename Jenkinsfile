pipeline {
    agent any

    tools {
    nodejs "Node 18"
}


    environment {
        // DOCKER_IMAGE = 'nirmalsubashana/task-manager:latest'
        DOCKER_IMAGE = 'nirmalsubashana/ jenkins/jenkins:lts'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                sh 'npx eslint .'
            }
        }

        stage('Security') {
            steps {
                sh 'dependency-check.sh --project task-manager --scan . || true'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Release') {
            steps {
                sh 'git tag -a v1.0 -m "Production Release v1.0"'
                sh 'git push origin v1.0'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring is done using Prometheus and Grafana (manually configured)'
            }
        }
    }
}
