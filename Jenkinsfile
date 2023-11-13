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
                    npm install
                    npm run build
                    ls
                '''
                archiveArtifacts 'src/target/'
            }
        }
        stage ('Test') {
            steps {
                echo 'Testing'
                sh '''
                    node --version
                    npm --version
                    npm i --legacy-peer-deps     
                    npm run test
                '''
                archiveArtifacts 'report.html'
            }
        }
        stage ('Notifications') {
            steps {
                echo 'Notifications'
                emailext (
                    subject: 'Pipeline Executado!',
                    body: 'Build completed. Please check the status.',
                    to: env.EMAIL,
                    from: 'testes107email@gmail.com',
                    mimeType: 'text/html'
                )
            }
    }
}
