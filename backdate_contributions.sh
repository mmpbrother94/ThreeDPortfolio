#!/bin/bash

# Enhanced script to backdate commits for maximum GitHub contributions
# This will create commits for every day from January 1, 2025 to November 30, 2025

echo "Starting backdated contribution generation..."

# Function to create commits for a specific date
create_commits_for_date() {
    local date=$1
    local commits_count=$((RANDOM % 8 + 5))  # 5-12 commits per day for maximum impact
    
    echo "Creating $commits_count commits for $date"
    
    for i in $(seq 1 $commits_count); do
        # Create different types of files and updates
        case $((i % 4)) in
            0)
                echo "Daily progress update - $date commit $i" >> .github/daily_progress.log
                git add .github/daily_progress.log
                git commit --date="$date 0$((RANDOM % 9 + 1)):$((RANDOM % 59 + 10)):$((RANDOM % 59 + 10))" -m "📈 Daily progress update $i for $date"
                ;;
            1)
                echo "Code enhancement - $date commit $i" >> .github/code_improvements.log
                git add .github/code_improvements.log
                git commit --date="$date 1$((RANDOM % 3 + 0)):$((RANDOM % 59 + 10)):$((RANDOM % 59 + 10))" -m "🚀 Code enhancement $i - $date"
                ;;
            2)
                echo "Feature development - $date commit $i" >> .github/feature_dev.log
                git add .github/feature_dev.log
                git commit --date="$date 1$((RANDOM % 5 + 4)):$((RANDOM % 59 + 10)):$((RANDOM % 59 + 10))" -m "✨ Feature development $i on $date"
                ;;
            3)
                echo "Bug fixes and optimizations - $date commit $i" >> .github/bug_fixes.log
                git add .github/bug_fixes.log
                git commit --date="$date 2$((RANDOM % 3 + 0)):$((RANDOM % 59 + 10)):$((RANDOM % 59 + 10))" -m "🐛 Bug fix $i - $date"
                ;;
        esac
    done
}

# Generate commits for each day from Jan 1 to Nov 30, 2025
for month in {01..11}; do
    case $month in
        01|03|05|07|08|10) days=31 ;;
        04|06|09|11) days=30 ;;
        02) days=28 ;;  # 2025 is not a leap year
    esac
    
    for day in $(seq -w 1 $days); do
        date_str="2025-$month-$day"
        create_commits_for_date "$date_str"
    done
done

echo "Backdated commits generation completed!"
echo "Pushing all commits to GitHub..."
git push origin main
echo "All backdated contributions have been pushed successfully!"
