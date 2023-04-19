rm -rf .build %%
cactus build &&
rsync -auv --checksum .build/ published/
