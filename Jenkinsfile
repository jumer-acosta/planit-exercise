pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run Playwright tests
                    sh 'npx playwright test'
                }
            }
        }
    }
    post {
        always {
            // Archive test results
            archiveArtifacts artifacts: 'test-results/**/*.*', allowEmptyArchive: true
            // Publish test results
            junit 'test-results/**/*.xml'
        }
    }
}