#!/bin/bash

# Function to generate a random IPv4 address
generate_ipv4() {
    echo "$((RANDOM % 256)).$((RANDOM % 256)).$((RANDOM % 256)).$((RANDOM % 256))"
}

# Function to generate a random IPv6 address
generate_ipv6() {
    echo "2001:%04x:%04x:%04x:%04x:%04x:%04x:%04x" \
    $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536)) \
    $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536))
}

# Function to generate random sleep time between 10ms and 100ms
generate_sleep_time() {
    echo "$(jot -r 1 5 10)"
}

# Function to print IPs in five columns
print_ips() {
    printf "%-20s %-20s %-20s %-20s %-20s\n" "${ips[@]}"2
}

# Function to display the progress bar
progress_bar() {
    local progress=$1
    local width=50
    local num_chars=$((progress * width / 100))
    local bar=$(printf "%-${width}s" "")
    printf "\r[%-${width}s] %d%%" "${bar// /#}" "$progress"
}

# Ask the user to choose an option
echo "Choose an option:"
echo "1. REROOT"
echo "2. BACKUP"
read option

case $option in
    1)
        echo "Reroot option selected."
        # Add your reroot logic here if needed
        ;;
    2)
        echo "Backup option selected."
        # Add your backup logic here if needed
        ;;
    *)
        echo "Invalid option."
        exit 1
        ;;
esac
