import os
import shutil
import json
from datetime import datetime

def create_backup_folder(base_path, folder_name):
    # Create a single folder for metadata and backup
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    backup_folder = os.path.join(base_path, f"{folder_name}_{timestamp}_backup")

    os.makedirs(backup_folder, exist_ok=True)

    return backup_folder

def save_metadata(backup_folder, folder_path):
    # Save folder metadata (e.g., list of files and sizes) in the same folder as backup
    metadata = {
        'files': {}
    }
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            metadata['files'][file] = os.path.getsize(file_path)

    metadata_file_path = os.path.join(backup_folder, 'metadata.json')
    with open(metadata_file_path, 'w') as f:
        json.dump(metadata, f, indent=4)

def backup_files(backup_folder, folder_path):
    # Backup files to the same folder
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            relative_path = os.path.relpath(file_path, folder_path)
            backup_path = os.path.join(backup_folder, relative_path)
            os.makedirs(os.path.dirname(backup_path), exist_ok=True)
            shutil.copy2(file_path, backup_path)

if __name__ == "__main__":
    base_path = '.'  # Base directory for metadata and backups
    folder_name = 'new'  # Folder name to be backed up
    folder_path = r'C:/Users/MV Sai Nischal/Desktop/new'  # Folder path to be backed up

    backup_folder = create_backup_folder(base_path, folder_name)
    save_metadata(backup_folder, folder_path)
    backup_files(backup_folder, folder_path)
