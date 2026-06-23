pipeline
{
    agent any
        stages {
            stage('Git Checkout') {
                steps {
                    git branch:'dev',
                        url:'https://github.com/Vimalraj-7202/huddle_fe.git'
                }
            }
            stage('Install Dependencies') {
                steps {
                    sh 'npm install'
                }
            }
            stage('Execute Test') {
                steps {
                    sh 'npm run test'
                }
            }

            stage('Build Project') {
                steps {
                    sh 'npm run build'
                }
            }
        }
}

