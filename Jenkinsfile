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
                unzip zipFile: 'k6 pipeline', dir: 'C:\Users\2132127\.jenkins\workspace'
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'C:\Users\2132127\.jenkins\workspace\k6 pipeline', reportFiles: 'summary.html', reportName: 'k6 report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }
}
