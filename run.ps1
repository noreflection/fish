Write-Host "#######" -foreground "Yellow"

# Get current directory path
$src = (Get-Item -Path ".\" -Verbose).FullName;
$drive = (get-location).Drive.Name;
Write-Host "Starting execution preparations ..." -foreground "Green" 


# Kill all dotnet and nodejs processes and make this window hidden
$params = @("taskkill -im dotnet.exe -f && taskkill -f -im node.exe&& exit"; )
Start-Process "cmd.exe" $params -WindowStyle Hidden;
Write-Host "All previous processes has been killed!" -foreground "Green"
Write-Host "#######" -foreground "Yellow"

# Iterate all directories present in the current directory path
Get-ChildItem $src -directory | Where-Object {$_.PsIsContainer} | Select-Object -Property Name | ForEach-Object {
    $cdProjectDir = [string]::Format("cd /d {0}\{1}", $src, $_.Name);

    # Get project's .csproj file path
    $projectDir = [string]::Format("{0}\{1}\*.csproj", $src, $_.Name); 
    $fileExists = Test-Path $projectDir;
    
    # Check folder having .csproj file
    if ($fileExists -eq $true) {
        $params = @("/" + $drive; $cdProjectDir; " && dotnet run"; )
        $message = [string]::Format("Running {0}.csproj ...", $_.Name);
        Write-Host $message -foreground "Green"
        Start-Process "cmd.exe" $params;
    }
}

# Iterate all directories present in the current directory path
Get-ChildItem $src -directory | Where-Object {$_.PsIsContainer} | Select-Object -Property Name | ForEach-Object {
    $cdProjectDir = [string]::Format("cd /d {0}\{1}", $src, $_.Name);

    # Get project's *.package file path 
    $projectDir = [string]::Format("{0}\{1}\package.json", $src, $_.Name); 
    $fileExists = Test-Path $projectDir;
    
    # Check project having *.package file
    if ($fileExists -eq $true) {
        $params = @("/C"; $cdProjectDir; " && npm start"; )
        $message = [string]::Format("Running {0} ...", $_.Name);
        Write-Host $message -foreground "Green"
        Start-Process "cmd.exe" $params;
    }
}