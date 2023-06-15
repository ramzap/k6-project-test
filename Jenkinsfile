pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Installing k6'
                sh 'sudo chown -R jenkins:jenkins jobs'
                sh 'choco install k6'
                echo 'Running K6 performance tests...'
                sh ' k6 run ./Src/Scenarious/firstScenario.js --out influxdb=http://localhost:8086/k6'
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: '', reportFiles: 'summary.html', reportName: 'k6 report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }
}
