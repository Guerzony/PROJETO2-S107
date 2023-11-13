pipeline {
    agent any

    environment {
        NODE_VERSION = '18.16.0'  // Especifique a versão desejada do Node.js
        TYPESCRIPT_VERSION = '^4.4.4'  // Especifique a versão desejada do TypeScript
    
    }

    stages {
        stage ('Set Environment Variable') {
            steps {
                script {
                    env.EMAIL = 'testes107email@gmail.com'
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh "node --version"
                sh "npm --version"
                sh '''
                    cd Aula-GitHub-Actions
                    npm install
                    npm run build
                    cd ${WORKSPACE}
                    ls
                '''
                archiveArtifacts 'Aula-GitHub-Actions/target/'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                sh '''
                    cd Aula-GitHub-Actions
                    npm run test
                '''
            }
        }
        stage ('Notifications') {
            steps {
                echo 'Notifications'
                emailext (
                    subject: 'Pipeline Executado!',
                    body: 'Build completed. Please check the status.',
                    to: env.EMAIL,
                    from: 'seu-email@example.com',
                    mimeType: 'text/html'
                )
            }
    }
}
