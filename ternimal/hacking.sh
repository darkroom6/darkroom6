#!/bin/bash

# Function to generate a random IPv4 address
generate_ipv4() {
    echo "$((RANDOM % 256)).$((RANDOM % 256)).$((RANDOM % 256)).$((RANDOM % 256))"
}

# Function to generate a random IPv6 address
generate_ipv6() {
    printf "2001:%04x:%04x:%04x:%04x:%04x:%04x:%04x\n" \
    $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536)) \
    $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536))
}

# Function to generate random sleep time between 10ms and 100ms
generate_sleep_time() {
    echo "$(jot -r 1 5 10)"
}

# Function to print IPs in five columns
print_ips() {
    printf "%-20s %-20s %-20s %-20s %-20s\n" "${ips[@]}"
}

# Function to display the progress bar
progress_bar() {
    local progress=$1
    local width=50
    local num_chars=$((progress * width / 100))
    local bar=$(printf "%-${width}s" "")
    printf "\r[%-${width}s] %d%%" "${bar// /#}" "$progress"
}


ip_inspector(){
    # Main loop to print 400,000 random IPs
    declare -a ips
    total_ips=400
    progress_step_10=$((total_ips / 10))
    progress_step_50=$((total_ips / 2))
    progress_step_70=$((total_ips * 7 / 10))
    progress_step_90=$((total_ips * 9 / 10))
    current_progress=0

    # Store the progress bar in a variable to display at the bottom
    progress_line=""

    for ((i = 1; i <= total_ips; i++)); do
        # Generate random IP type (IPv4 or IPv6)
        ip_type=$((RANDOM % 2))

        if [ $ip_type -eq 0 ]; then
            ips[0]=$(generate_ipv4)
        else
            ips[0]=$(generate_ipv6)
        fi

        # Generate random sleep time in milliseconds
        sleep_time=$(generate_sleep_time)

        # Convert milliseconds to seconds for the sleep command
        sleep_seconds=$(bc <<<"scale=3; $sleep_time / 700")

        # Print IPs in five columns
        if ((i % 5 == 0)); then
            ips[4]=${ips[0]}
            print_ips
            unset ips
        else
            ips[$((i % 5))]=${ips[0]}
        fi

        # Sleep
        sleep $sleep_seconds

        # Update progress bar
        current_progress=$((i * 100 / total_ips))
        if [ $i -eq $progress_step_10 ] || [ $i -eq $progress_step_50 ] || [ $i -eq $progress_step_70 ] || [ $i -eq $progress_step_90 ]; then
            progress_bar $current_progress
            progress_line="\r[%-${width}s] %d%%" "${bar// /#}" "$current_progress"
            sleep 0.5
        fi
    done

    # Display 100% progress at the bottom
    printf "%s\n" "$progress_line"
}

pwd_mining(){
    echo "Initiating password mining sequence..."
    sleep 0.3
    echo "Searching for vulnerable targets..."
    sleep 0.5
    echo "Scanning network for potential IPs..."

    # Generate and simulate scanning random IPs
    echo "=========================="
    total_ips=35
    for i in $(seq 1 "$total_ips"); do
        ip=$(printf "%d.%d.%d.%d" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))")
        ip_percentage=$((i * 100 / total_ips))
        echo "$ip_percentage% - Scanning IP: $ip"
        sleep 0.1
    done

    sleep 0.5
    echo "Target acquired. Exploiting weak encryption..."
    sleep 0.1
    echo "Extracting encrypted passwords..."
    sleep 0.2
    echo "Decrypting passwords..."
    sleep 0.5

    # Simulate decrypting passwords
    echo "=========================="
    total_pwd=100
    for i in $(seq 1 "$total_pwd"); do
        password_length=$((RANDOM % 27 + 6)) # Random length between 6 and 32
        password_asterisks=$(printf "%-${password_length}s" "")
        pwd_percentage=$((i * 100 / total_pwd))
       

        # Simulate occasional access denied
        if ((i == 3 || i % 7 == 0 || i % 13 == 0)); then
            echo -n "$pwd_percentage% - Password: ${password_asterisks// /*}"
            echo -n " >> Access denied!"
            echo ""
            sleep 0.2
        else
            echo "$pwd_percentage% - Password: ${password_asterisks// /*}"
        fi
        sleep 0.1
    done
    echo "---------------------------------------------------------------"
    echo "#                       ACCESS GRANTED!                       #"
    echo "---------------------------------------------------------------"
    echo ""
    echo ""
    echo ""
    echo ""
    echo ""
    sleep 5

}

block_greendoor() {
    echo "Initializing security protocol..."
    sleep 1
    echo "Analyzing system vulnerabilities..."
    sleep 1
    echo "Scanning network for potential threats..."
    sleep 1

    # Generate and simulate scanning random IPs
    total_ips=70
    for i in $(seq 1 "$total_ips"); do
        ip=$(printf "%d.%d.%d.%d" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))")
        ip_percentage=$((i * 100 / total_ips))
        ip_number=$(printf "%02d" "$i") # Add leading zeros for IP numbers < 10
        space_padding=$((15 - ${#ip})) # Calculate the number of leading spaces required
        spaces=$(printf "%*s" "$space_padding" "") # Generate leading spaces
        echo "Scanning IP $ip_number/$total_ips: $spaces$ip [=====>] ($ip_percentage% complete)"
        
        sleep 0.1
    done
    echo "Scanning complete: $total_ips IP addresses analyzed."

    echo "Target locked. Initiating encryption bypass..."
    sleep 1
    echo "Extracting encrypted data packets..."
    sleep 1
    echo "Decrypting secure channels..."
    sleep 1
    echo "Protection process completed."

    # Simulate decrypting passwords
    echo "---------------------------------------------------------------"
    echo "█▓▒░                                                       ░▒▓█"
    echo "█▓▒░               Chặn GreenDoor thành công!              ░▒▓█"
    echo "█▓▒░                                                       ░▒▓█"
    echo "---------------------------------------------------------------"
    echo ""
}


ip_delete(){
    # Main loop to print random IPs
    declare -a ips
    total_ips=199
    progress_step_10=$((total_ips / 10))
    progress_step_50=$((total_ips / 2))
    progress_step_70=$((total_ips * 7 / 10))
    progress_step_90=$((total_ips * 9 / 10))
    current_progress=0

    # Store the progress bar in a variable to display at the bottom
    progress_line=""

    for ((i = 1; i <= total_ips; i++)); do
        # Generate random IP type (IPv4 or IPv6)
        ip_type=$((RANDOM % 2))

        if [ $ip_type -eq 0 ]; then
            ips[0]=$(generate_ipv4)
        else
        ips[0]=$(generate_ipv6)
    fi

    # Generate random sleep time in milliseconds
    sleep_time=$(generate_sleep_time)

    # Convert milliseconds to seconds for the sleep command
    sleep_seconds=$(bc <<<"scale=3; $sleep_time / 102")

    # Print IPs in five columns
    if ((i % 3 == 0)); then
        ips[4]=${ips[0]}
        print_ips
        printf "%s\n" "========================================================================================================="
        printf "%s\n" "#                                       IP DELETED SUCCESSFULLY!                                         #"
        printf "%s\n" "========================================================================================================="

        unset ips
    else
        ips[$((i % 5))]=${ips[0]}
    fi

    # Sleep
    sleep $sleep_seconds

    # Update progress bar
    current_progress=$((i * 100 / total_ips))
    if [ $i -eq $progress_step_10 ] || [ $i -eq $progress_step_50 ] || [ $i -eq $progress_step_70 ] || [ $i -eq $progress_step_90 ]; then
        progress_bar $current_progress
        progress_line="\r[%-${width}s] %d%%" "${bar// /#}" "$current_progress"
        sleep 0.5
    fi
done

# Display 100% progress at the bottom
printf "%s\n" "$progress_line"

}
sleep .3
# Ask the user to choose an option
echo "Choose an option:"
echo "1. IP INSPECTOR"
echo "2. REROOT"
echo "3. SCAN MALWARE"
echo "4. PWD MINING"
echo "5. BLOCK GREENDOOR"
echo "0. BACKUP"
read option

case $option in
    1)
        ip_inspector
        ;;
    2)
        echo "Are you sure to delete? (Y/n)"
        echo "========================================="
        echo "#     Are you sure to delete? (Y/n)     #"
        echo "========================================="
        read option1

        case $option1 in
          'Y' | 'y')
            ip_delete
            ;;
          *)
            echo "Operation canceled."
            ;;
        esac
        ;;
    3)  
        python3 malware_scanner.py
        ;;
    4)  
        pwd_mining
        ;;
    5)
        block_greendoor
        ;;
    0)
        echo "Backup option."
        ;;
    *)
        echo "Invalid option."
        exit 1
        ;;
esac